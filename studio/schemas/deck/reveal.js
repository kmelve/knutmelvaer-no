export default {
  name: 'reveal',
  type: 'object',
  title: 'Reveal.js settings',
  description: 'Configuration specific for Reveal.js-based frontends',
  fields: [
    {
      name: 'transition',
      type: 'string',
      title: 'Transition style',
      description: 'For full page slide backgrounds. Slide per default.',
      options: {
        list: [
          {value: 'none', title: 'None'},
          {value: 'fade', title: 'Fade'},
          {value: 'slide', title: 'Slide'},
          {value: 'convex', title: 'Convex'},
          {value: 'concave', title: 'Concave'},
          {value: 'zoom', title: 'Zoom'}
        ]
      }
    },
    {
      name: 'transitionSpeed',
      type: 'string',
      title: 'Transition speed',
      options: {
        list: [
          {value: 'default', title: 'Default'},
          {value: 'fast', title: 'Fast'},
          {value: 'slow', title: 'Slow'}
        ]
      }
    },
    {
      name: 'controls',
      type: 'boolean',
      title: 'Show controls',
      description: 'On per default'
    },
    {
      name: 'controlsLayout',
      type: 'string',
      title: 'Control position',
      description:
        'Determines where the controls should appear. Bottom-right per default',
      options: {
        list: [
          {value: 'edges', title: 'edges'},
          {value: 'bottom-right', title: 'bottom-right'}
        ]
      }
    },
    {
      name: 'controlsBackArrow',
      type: 'string',
      title: 'Backwards navigation arrows visibility. Faded per default',
      options: {
        list: [
          {value: 'faded', title: 'faded'},
          {value: 'hidden', title: 'hidden'},
          {value: 'visible', title: 'visible'}
        ]
      }
    },
    {
      name: 'progress',
      type: 'boolean',
      title: 'Show progress bar',
      description: 'On per default'
    },
    {
      name: 'defaultTiming',
      type: 'number',
      title: 'Set default timing per slide',
      description: 'Two minutes per default'
    },
    {
      name: 'slideNumber',
      type: 'boolean',
      title: 'Display the page number of the current slide',
      description: 'Off per default'
    },
    {
      name: 'history',
      type: 'boolean',
      title: 'Push each slide change to the browser history',
      description: 'Off by default'
    },
    {
      name: 'keyboard',
      type: 'boolean',
      title: 'Keyboard shortcuts',
      description: 'Enable keyboard shortcuts. On per default.'
    },
    {
      name: 'overview',
      type: 'boolean',
      title: 'Slide overview',
      description: 'On per default'
    },
    {
      name: 'center',
      type: 'boolean',
      title: 'Vertical centering of slides',
      description: 'On per default'
    },
    {
      name: 'touch',
      type: 'boolean',
      title: 'Touch navigation',
      description:
        'Touch navigation on devices that supports it. On per default'
    },
    {
      name: 'loop',
      type: 'boolean',
      title: 'Loop presentation',
      description: 'On per default'
    },
    {
      name: 'rtl',
      type: 'boolean',
      title: 'Right To Left',
      description:
        'Change the presentation direction to RTL. Off per default'
    },
    {
      name: 'shuffle',
      type: 'boolean',
      title: 'Randomize slides',
      description:
        'Randomizes the order of slides each time the presentation loads. Off per default'
    },
    {
      name: 'fragments',
      type: 'boolean',
      title: 'Fragments',
      description:
        'Fragments are used to highlight individual elements on a slide. This turns fragments on and off globally. On per default'
    },
    {
      name: 'embedded',
      type: 'boolean',
      title: 'Embedded mode',
      description:
        'Flags if the presentation is running in an embedded mode. Off per default'
    },
    {
      name: 'help',
      type: 'boolean',
      title: 'Help',
      description:
        'Flags if we should show a help overlay when the questionmark key is pressed. On per default.'
    },
    {
      name: 'showNotes',
      type: 'boolean',
      title: 'Show notes',
      description:
        'Flags if speaker notes should be visible to all viewers. Off per default'
    },
    {
      name: 'autoPlayMedia',
      type: 'boolean',
      title: 'Autoplay media',
      description: `Global override for autoplaying embedded media (video/audio/iframe). Null per default`
    },
    {
      name: 'autoSlide',
      type: 'number',
      title: 'Autoslide time',
      description:
        'Number of milliseconds between automatically proceeding to the next slide, disabled when set to 0, this value can be overwritten by using a data-autoslide attribute on your slides. Off per default'
    },
    {
      name: 'mouseWheel',
      type: 'boolean',
      title: 'Enable mousewheel navigation',
      description: 'Off per default'
    },
    {
      name: 'hideAddressBar',
      type: 'boolean',
      title: 'Hide address bar on mobile devices',
      description: 'On per default'
    },
    {
      name: 'previewLinks',
      type: 'boolean',
      title: 'Preview links',
      description:
        'Opens links in an iframe preview overlay. Off per default'
    },
    {
      name: 'viewDistance',
      type: 'number',
      title: 'View slide distance',
      description:
        'Number of slides away from the current that are visible (3 per default)'
    },
    {
      name: 'parallaxBackgroundImage',
      type: 'image',
      title: 'Parallax backgroundimage',
      description: 'Upload file'
    }
  ]
}
