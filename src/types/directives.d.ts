import type { DisabledClipboardDirective } from '@/directives/types/';

declare module 'vue' {
  export interface GlobalDirectives {
    /**
     * @see {@link DisabledClipboardDirective} 了解该指令的详细说明
     */
    vDisabledClipboard: DisabledClipboardDirective;
  }
}
