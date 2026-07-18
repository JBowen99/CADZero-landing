export interface Feature {
  icon: string;
  title: string;
  description: string;
  span?: 'wide' | 'tall';
}

export const FEATURES: Feature[] = [
  {
    icon: 'MessageSquare',
    title: 'Streaming AI Conversation',
    description:
      'Chat with the model in real time. Responses stream token-by-token across Plan, Chat, and Build modes.',
    span: 'wide',
  },
  {
    icon: 'Boxes',
    title: 'Dual CAD Kernels',
    description:
      'Powered by real geometry engines — OpenSCAD and Build123D (OpenCascade). Not a toy; this is production-grade parametric modeling.',
  },
  {
    icon: 'Orbit',
    title: 'Interactive 3D Viewport',
    description:
      'Orbit, pan, and zoom real meshes in a Three.js viewport. Shaded, solid, and wireframe views. View cube, grid, and RGB axes.',
  },
  {
    icon: 'Code',
    title: 'Code Editor + Live Preview',
    description:
      'A full CodeMirror editor with syntax highlighting. Edit the generated parametric code, hit Render, and see the mesh update instantly.',
    span: 'wide',
  },
  {
    icon: 'History',
    title: 'Revision History (PDM)',
    description:
      'Every save creates a versioned checkpoint in a DAG revision graph. Preview any past version and restore it with one click.',
  },
  {
    icon: 'Sparkles',
    title: 'Multi-Model AI',
    description:
      'Bring your own model. Supports OpenAI, Anthropic Claude, xAI Grok, and many more via OpenRouter.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Topology Selection',
    description:
      'Pick faces, edges, and vertices directly in the viewport. Your selection becomes context for the AI.',
  },
  {
    icon: 'Image',
    title: 'Image / Vision Input',
    description:
      'Attach reference images. Drag, drop, or paste — vision-capable models can see your sketches and blueprints.',
  },
  {
    icon: 'Download',
    title: 'Export Anywhere',
    description:
      'Export to STL, OBJ, 3MF, or STEP (Build123D). From conversation to manufacturing-ready file.',
  },
  {
    icon: 'FileBox',
    title: 'Self-Contained .cadz Files',
    description:
      'Each part is a portable SQLite database — geometry, code, chat history, and revisions in one shareable file.',
  },
];
