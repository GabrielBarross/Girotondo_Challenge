
import { SessionPromise } from 'vtex.render-runtime'

export function getSession() {
    return global &&
        (global as any).__RENDER_8_SESSION__ &&
        (global as any).__RENDER_8_SESSION__.sessionPromise
        ? ((global as any).__RENDER_8_SESSION__.sessionPromise as Promise<
            SessionPromise
        >)
        : null
}