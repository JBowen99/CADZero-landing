export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Describe it',
    description:
      'Tell CADZero what you need in plain English. No sketching, no menus.',
  },
  {
    number: '02',
    title: 'It builds real geometry',
    description:
      'The AI writes parametric CAD code, executes it on a real CAD kernel, and renders the 3D result in your viewport.',
  },
  {
    number: '03',
    title: 'Refine by chatting',
    description:
      'Increase thickness. Add fillets. Move that hole. Just ask — the model updates live.',
  },
];
