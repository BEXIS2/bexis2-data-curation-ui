import { SvelteComponentTyped } from "svelte";
export declare type ThemeSpec = Record<string, StyleSpec>;
export declare type StyleSpec = {
    [propOrSelector: string]: string | number | StyleSpec | null;
};
import { type Extension } from "@codemirror/state";
import { type LanguageSupport } from "@codemirror/language";
declare const __propDef: {
    props: {
        class?: string | undefined;
        value?: string | null | undefined;
        basic?: boolean | undefined;
        lang?: LanguageSupport | null | undefined;
        theme?: Extension | null | undefined;
        extensions?: Extension[] | undefined;
        useTab?: boolean | undefined;
        tabSize?: number | undefined;
        styles?: ThemeSpec | null | undefined;
        lineWrapping?: boolean | undefined;
        editable?: boolean | undefined;
        readonly?: boolean | undefined;
        placeholder?: string | HTMLElement | null | undefined;
    };
    events: {
        change: CustomEvent<string>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CodeMirrorProps = typeof __propDef.props;
export declare type CodeMirrorEvents = typeof __propDef.events;
export declare type CodeMirrorSlots = typeof __propDef.slots;
export default class CodeMirror extends SvelteComponentTyped<CodeMirrorProps, CodeMirrorEvents, CodeMirrorSlots> {
}
export {};
