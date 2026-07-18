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
      'Every command updates the 3D viewport instantly. Rotate, pan, and inspect your design from any angle while the AI works alongside you.',
    points: [
      'Real-time 3D preview',
      'Orbit, pan & zoom controls',
      'Mesh, solid & wireframe views',
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
