# Opendex Asset Manifest

Assets in this directory are organized by production intent.

## Production assets

- `brand/`: Opendex-owned brand marks and badges.
- `brand-system/blueprint/`: Opendex-owned blueprint corners, traces and technical frame assets.
- `brand-system/icons/`: Opendex-owned interface icons. Use them only as small functional icons, not as large section imagery or background visuals.
- `brand-system/infrastructure/`: Opendex-owned infrastructure illustrations for hero and section visuals.
- `brand-system/patterns/`: Opendex-owned background patterns.
- `product/`: Opendex product visuals used in public pages.
- `utility/`: Utility images such as cookie and not-found illustrations.
- `visual/blueprint/`: Technical linework, rulers, nodes and blueprint primitives.
- `visual/charts/`: Abstract chart assets used for product storytelling.
- `visual/illustrations/`: Generic visual support assets for Opendex sections.
- `visual/patterns/`: Background textures and technical patterns.
- `visual/slab/`: Layered slab primitives for depth and interface surfaces.
- `visual/lottie/`: Extracted animation frames kept as local visual references.

## Reference-only assets

- `reference/third-party/`: External design references and third-party marks.

Do not use `reference/third-party/` assets in production UI unless ownership and usage rights are explicitly confirmed.

## Naming convention

Use lowercase kebab-case names for production paths. Root-level uploaded files are kept as source imports; production UI should reference the organized aliases under `assets/brand-system/`.
