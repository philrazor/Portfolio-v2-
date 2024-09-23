from pillow import Image
import os

# Load the images
img1 = Image.open("images/home.png")  # First image (make sure path is correct)
img2 = Image.open("images/home1.jpeg")  # Second image (correct the spelling)

# Step 1: Resize the second image to match the size of the first image
img2_resized = img2.resize(img1.size)

# Step 2: Create a new background with color similar to the first image background
background = Image.new('RGB', img1.size, (0, 222, 255))  # Example background color

# Step 3: Paste the resized second image onto the background
background.paste(img2_resized, (0, 0))  # No mask needed for JPEG

# Step 4: Make sure the output directory exists
output_dir = "edited"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Save the final image
output_path = os.path.join(output_dir, "edited_home1.jpeg")
background.save(output_path)

# Display the final image (optional)
background.show()

