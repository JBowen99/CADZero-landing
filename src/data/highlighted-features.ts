export interface HighlightedFeature {
  title: string;
  description: string;
  points: string[];
  visual: 'chat' | 'viewport' | 'export';
  imageOnLeft: boolean;
}

export const HIGHLIGHTED_FEATURES: HighlightedFeature[] = [
  {
    title: 'Describe it, get it built',
    description:
      'Stop fighting with menus and tool palettes. Just type what you need in plain English and watch CADZero generate parametric geometry in real time.',
    points: [
      'Natural language CAD modeling',
      'Real-time geometry generation',
      'Parametric & always editable',
    ],
    visual: 'chat',
    imageOnLeft: true,
  },
  {
    title: 'See your model come to life',
    description:
      'A full 3D viewport with the tools you expect — orbit, pan, zoom, view cube, grid, and RGB axes. Select faces, edges, or vertices directly on the mesh and pass that context to the chat for precise, location-aware edits like "put a hole right here".',
    points: [
      'Orbit, pan, zoom, view cube & axes',
      'Mesh, solid & wireframe views',
      'Pick faces, edges & vertices as chat context',
    ],
    visual: 'viewport',
    imageOnLeft: false,
  },
  {
    title: 'Export anywhere, version everything',
    description:
      'Take your design wherever it needs to go. CADZero supports all major formats and keeps a full revision history so you never lose a version.',
    points: [
      'STEP, STL, OBJ, GLB & more',
      'Built-in version control (PDM)',
      'Self-contained .cadz files',
    ],
    visual: 'export',
    imageOnLeft: true,
  },
];
