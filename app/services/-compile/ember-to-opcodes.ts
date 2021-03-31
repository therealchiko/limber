import { compileTemplate as _compile } from '@ember/template-compilation';

import type { CompileOptions } from '@ember/template-compilation';

/**
 * Same API as in ember -- but with defaults specific to Limber
 * (and making the call site a little nicer so experimentation
 * can happen just in this file)
 */
export function compileTemplate(text: string, { moduleName }: Pick<CompileOptions, 'moduleName'>) {
  // https://github.com/emberjs/rfcs/pull/731/files
  let compiled = _compile(text, {
    // with strictMode, we'd need to import array, hash, and all that
    strictMode: false,
    moduleName,
    locals: [],
    isProduction: false,
    meta: {},
    plugins: {
      ast: [],
    },
  });

  return compiled;
}
