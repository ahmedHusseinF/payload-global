import { GlobalConfig } from 'payload/types';

const Example: GlobalConfig = {
  slug: 'example',
  label: 'Example',
  fields: [
    {
      name: 'arr',
      type: 'array',
      fields: [
        {
          name: 'whatever',
          type: 'text',
        },
      ],
    },
  ],
};

export default Example;
