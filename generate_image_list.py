import os

# Path to your images folder
folder_path = "memories"

# File extensions to include
valid_extensions = {".jpg", ".jpeg", ".png", ".gif", ".webp"}

# List image files
image_files = [f for f in os.listdir("memory") if os.path.splitext(f)[1].lower() in valid_extensions]

# Sort files alphabetically (optional)
image_files.sort()

# Generate JavaScript array format
js_array = "const imageFiles = [\n"
for img in image_files:
    js_array += f'    "{img}",\n'
js_array += "];"

# Save to file
with open("image_list.js", "w") as f:
    f.write(js_array)

print("✅ image_list.js generated with the following content:")
print(js_array)
