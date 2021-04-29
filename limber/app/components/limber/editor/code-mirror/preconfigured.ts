import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets';
import { defaultKeymap } from '@codemirror/commands';
import { commentKeymap } from '@codemirror/comment';
import { foldGutter, foldKeymap } from '@codemirror/fold';
import { defaultHighlightStyle } from '@codemirror/highlight';
import { history, historyKeymap } from '@codemirror/history';
import { javascript } from '@codemirror/lang-javascript';
import { markdown } from '@codemirror/lang-markdown';
import { indentOnInput } from '@codemirror/language';
import { lintKeymap } from '@codemirror/lint';
import { bracketMatching } from '@codemirror/matchbrackets';
import { searchKeymap } from '@codemirror/search';
import { EditorState } from '@codemirror/state';
import Text from '@codemirror/text';
import { EditorView } from '@codemirror/view';
import { keymap } from '@codemirror/view';

export default function newEditor(
  element: HTMLElement,
  value: string,
  updateText: (text: string) => void
) {
  EditorView.updateListener.of(({ state }) => {
    updateText(Text.of(state.doc.toJSON()));
  });

  return new EditorView({
    state: EditorState.create({
      doc: value,
      extensions: [
        foldGutter(),
        history(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        defaultHighlightStyle.fallback,
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...searchKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...commentKeymap,
          ...completionKeymap,
          ...lintKeymap,
        ]),
        javascript(),
        markdown(),
        // defaultHighlightStyle
      ],
    }),
    parent: element,
  });
}
