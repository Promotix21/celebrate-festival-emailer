"""Generate simple PNG icons for the email template."""
from PIL import Image, ImageDraw, ImageFont
import os

ICON_SIZE = 80
ICONS_DIR = os.path.join(os.path.dirname(__file__), "icons")
os.makedirs(ICONS_DIR, exist_ok=True)

NAVY = (26, 54, 93)
RED = (185, 28, 34)
WHITE = (255, 255, 255)

# Icon definitions: name, unicode char, color
icons = [
    # Timeline step icons
    ("users", "\u2605", RED),           # star as placeholder for users/grand opening
    ("clipboard", "\u2611", NAVY),      # ballot box with check
    ("wrench", "\u2692", NAVY),         # hammer and pick
    ("truck", "\u25B6", RED),           # triangle as placeholder
    ("file", "\u270D", NAVY),           # writing hand
    ("pen", "\u270E", NAVY),            # pencil

    # Trust bar icons
    ("check-circle", "\u2713", WHITE),   # check mark
    ("clock", "\u25F4", WHITE),          # clock
    ("settings", "\u2699", WHITE),       # gear
    ("handshake", "\u2764", WHITE),      # heart as placeholder

    # Social icons
    ("facebook", "f", WHITE),
    ("instagram", "in", WHITE),
    ("linkedin", "Li", WHITE),
]

def create_icon(name, char, fg_color, bg_color=None, size=ICON_SIZE):
    """Create a simple icon with a character on transparent background."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Try to use a font
    font_size = size // 2
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except (OSError, IOError):
        font = ImageFont.load_default()

    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), char, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1]

    draw.text((x, y), char, fill=fg_color, font=font)

    path = os.path.join(ICONS_DIR, f"{name}.png")
    img.save(path, "PNG")
    print(f"Created {path}")

def create_social_icon(name, char, size=40):
    """Create a social media icon with dark bg circle."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Draw circle background
    draw.ellipse([0, 0, size-1, size-1], fill=(55, 65, 81))

    font_size = size // 3
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except (OSError, IOError):
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), char, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1]
    draw.text((x, y), char, fill=WHITE, font=font)

    path = os.path.join(ICONS_DIR, f"{name}.png")
    img.save(path, "PNG")
    print(f"Created {path}")

# Generate step icons
for name, char, color in icons[:6]:
    create_icon(name, char, color, size=ICON_SIZE)

# Generate trust bar icons
for name, char, color in icons[6:10]:
    create_icon(name, char, RED, size=48)

# Generate social icons
for name, char, _ in icons[10:]:
    create_social_icon(name, char, size=40)

print("\nAll icons generated!")
