declare module "@sanity/block-content-to-react" {
  import * as React from "react";
  export type SerializerType<T> = { [K in keyof T]: { _type: K } & T[K] };
  export type SerializerTypes<T> = SerializerType<T>[keyof SerializerType<T>];

  /** These makrs have a default serializer, and they will style the text accordingly. */
  export type DefaultMark =
    | "strong"
    | "em"
    | "code"
    | "underline"
    | "strike-through";
  export interface SpanType {
    _type: "span";
    /**
     * A list of strings.
     * If not a `DefaultMark`, you must have
     * a corresponding mark definition in `markDefs`
     * */
    marks?: DefaultMark[] | string[];
    text: string;
  }

  export type TypeProps<K, P> = {
    node: P;
    _type: K;
    options: { imageOptions: any };
    isInline: boolean;
  };

  /**
   * Use this if you define your custom type serializer
   * outside of BlockContent#serializers#types.
   */
  export type TypeSerializer<S, K extends keyof S> = React.FC<
    TypeProps<K, S[K]>
  >;

  /**
   * Use this if you define all your custom type serializers
   * outside of BlockContent#serializers.
   */
  export type TypeSerializers<S> = {
    [K in keyof S]: TypeSerializer<S, K>;
  };

  export type MarkDef<M> = {
    [T in keyof M]: {
      _type: T;
      /** Must correspond to one of the marks from a child of `children` */
      _key: string;
    } & M[T];
  };
  export type MarkDefs<M> = MarkDef<M>[keyof MarkDef<M>][];
  export type MarkProps<P> = {
    _type: "span";
    _key: undefined;
    mark: P;
    markKey: string;
  };

  /**
   * Use this if you define your custom mark serializer
   * outside of BlockContent#serializers#marks.
   */
  export type MarkSerializer<S, K extends keyof S> = React.FC<MarkProps<S[K]>>;

  /**
   * Use this if you define all your custom mark serializers
   * outside of BlockContent#serializers.
   */
  export type MarkSerializers<S> = {
    [K in keyof S]: MarkSerializer<S, K>;
  };
  export interface BlockContentProps {
    /**
     * Pass in either an array or a single object of [Portable Text](https://github.com/portabletext/portabletext)
     *
     * *This is the only required prop*
     */
    blocks: any[] | any;
    /**
     * When more than one block is given, a container node has to be created. Passing a className will pass it on to the container.
     * @note see `renderContainerOnSingleChild`
     */
    className?: string;
    /**
     * When a single block is given as input, the default behavior is to not render any container.
     * If you always want to render the container, pass `true`.
     */
    renderContainerOnSingleChild?: boolean;
    /**
     *  Define custom serializers
     *
     */
    serializers?: {
      /**
       * Serializers for block types
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      types?: Record<string, (props: any) => JSX.Element | null>;
      /**
       * Serializers for marks - data that annotates a text child of a block.
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      marks?: Record<string, (props: any) => JSX.Element | null>;
      /** React component to use when rendering a list node */
      list?: React.Component;
      /** React component to use when rendering a list item node */
      listItem?: React.Component;
      /**
       * React component to use when transforming newline characters
       * to a hard break (<br/> by default, pass false to render newline character)
       */
      hardBreak?: React.Component;
      /** Serializer for the container wrapping the blocks */
      container?: React.Component;
    };
    /**
     * When encountering image blocks,
     * this defines which query parameters to apply in order to control size/crop mode etc.
     */
    imageOptions?: any;
    /** The ID of your Sanity project. */
    projectId?: string;
    /** Name of the Sanity dataset containing the document that is being rendered. */
    dataset?: string;
  }
  export type ReactSerializers<T = undefined, M = undefined> = Omit<
    {
      /**
       * Serializers for custom block types
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      types: TypeSerializers<T>;
      /**
       * Serializers for marks - data that annotates a text child of a block.
       * @example
       * ```jsx
       * const input = [{
       *   _type: 'block',
       *   children: [{
       *     _key: 'a1ph4',
       *     _type: 'span',
       *     marks: ['s0m3k3y'],
       *     text: 'Sanity'
       *   }],
       *   markDefs: [{
       *     _key: 's0m3k3y',
       *     _type: 'highlight',
       *     color: '#E4FC5B'
       *   }]
       * }]
       *
       * const highlight = props => {
       *   return (
       *     <span style={{backgroundColor: props.mark.color}}>
       *       {props.children}
       *     </span>
       *   )
       * }
       *
       * <BlockContent
       *   blocks={input}
       *   serializers={{marks: {highlight}}}
       * />
       * ```
       */
      marks: MarkSerializers<M>;
      /** React component to use when rendering a list node */
      list?: React.FC;
      /** React component to use when rendering a list item node */
      listItem?: React.FC;
      /**
       * React component to use when transforming newline characters
       * to a hard break (<br/> by default, pass false to render newline character)
       */
      hardBreak?: React.FC;
      /** Serializer for the container wrapping the blocks */
      container?: React.FC;
    },
    T extends undefined
      ? "types"
      : never | M extends undefined
      ? "marks"
      : never
  >;
  export type PortableText<T = undefined, M = undefined> = (
    | SerializerTypes<T>
    | BlockType<T, M>
  )[];

  export interface BlockType<T, M> {
    _type: "block";
    markDefs: MarkDefs<M>;
    style?: "normal" | string;
    children: PortableText<T, M> | SpanType[];
    listItem?: string;
    level?: number;
  }

  /** React component for transforming Sanity block content to React components */

  export default function BlockContent(props: BlockContentProps): JSX.Element;
}
