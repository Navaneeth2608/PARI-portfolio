from PIL import Image, ImageEnhance, ImageOps
import os

def process_headshot():
    img_path = r"C:\Users\Dell\.gemini\antigravity-ide\brain\48a1b2f5-8df4-47bc-a453-5798f3d9bba8\media__1783656075465.jpg"
    out_dir = r"C:\Users\Dell\.gemini\antigravity-ide\scratch\personal-portfolio\public"
    os.makedirs(out_dir, exist_ok=True)
    
    if not os.path.exists(img_path):
        print(f"Error: {img_path} not found")
        return
        
    with Image.open(img_path) as img:
        # 1. Crop the image to focus on the face
        # Image is 840x1024. Let's crop a square of 700x700
        # X: 70 to 770 (centered at 420)
        # Y: 80 to 780 (centered at 430, focusing on head and shoulders)
        left = 70
        top = 80
        right = 770
        bottom = 780
        cropped = img.crop((left, top, right, bottom))
        
        # 2. Enhance contrast and brightness
        enhancer_contrast = ImageEnhance.Contrast(cropped)
        high_contrast = enhancer_contrast.enhance(1.2)
        enhancer_brightness = ImageEnhance.Brightness(high_contrast)
        brightened = enhancer_brightness.enhance(1.05)
        
        # Save a high-quality color version
        color_path = os.path.join(out_dir, "profile-color.jpg")
        brightened.save(color_path, "JPEG", quality=95)
        print(f"Saved color profile to {color_path}")
        
        # 3. Create a grayscale version
        grayscale = ImageOps.grayscale(brightened)
        
        # Save grayscale version
        gray_path = os.path.join(out_dir, "profile-gray.jpg")
        grayscale.save(gray_path, "JPEG", quality=95)
        print(f"Saved grayscale profile to {gray_path}")
        
        # 4. Create a transparent background version
        # Convert to RGBA
        rgba = brightened.convert("RGBA")
        datas = rgba.getdata()
        
        new_data = []
        for item in datas:
            r, g, b, a = item
            # Calculate luminance
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            
            # If the pixel is very light (background is light grey, R, G, B are high and close to each other)
            # We can feather the alpha channel based on luminance
            # Let's say: lum >= 205 starts fading out, and lum >= 235 is completely transparent
            if lum >= 230:
                new_data.append((r, g, b, 0))
            elif lum >= 195:
                # Linear interpolation of alpha from 255 down to 0
                alpha = int(255 * (1 - (lum - 195) / (230 - 195)))
                # Ensure alpha is between 0 and 255
                alpha = max(0, min(255, alpha))
                new_data.append((r, g, b, alpha))
            else:
                new_data.append((r, g, b, 255))
                
        rgba.putdata(new_data)
        
        # Apply a soft blur or clean edge if needed, but a simple alpha mask is a good start
        transparent_path = os.path.join(out_dir, "profile-transparent.png")
        rgba.save(transparent_path, "PNG")
        print(f"Saved transparent profile to {transparent_path}")
        
        # 5. Let's do the same for the grayscale image (make it transparent grayscale)
        rgba_gray = grayscale.convert("RGBA")
        gray_datas = rgba_gray.getdata()
        
        new_gray_data = []
        for item in gray_datas:
            r, g, b, a = item
            # Since it's grayscale, r = g = b
            lum = r
            if lum >= 230:
                new_gray_data.append((r, g, b, 0))
            elif lum >= 195:
                alpha = int(255 * (1 - (lum - 195) / (230 - 195)))
                alpha = max(0, min(255, alpha))
                new_gray_data.append((r, g, b, alpha))
            else:
                new_gray_data.append((r, g, b, 255))
                
        rgba_gray.putdata(new_gray_data)
        transparent_gray_path = os.path.join(out_dir, "profile-transparent-gray.png")
        rgba_gray.save(transparent_gray_path, "PNG")
        print(f"Saved transparent grayscale profile to {transparent_gray_path}")

if __name__ == "__main__":
    process_headshot()
