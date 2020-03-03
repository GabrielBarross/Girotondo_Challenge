declare module 'vtex.render-runtime' {

    export const ExtensionPoint: ComponentType<ExtensionPointProps>

    export const useRuntime: any

    export interface RenderSession {
        sessionPromise: Promise<SessionPromise>
    }

    export interface SessionPromise {
        response: Session | SessionUnauthorized | SessionForbidden
    }

    interface Session {
        id: string
        namespaces: {
            store: {
                channel: string
            }
            profile: {
                isAuthenticated: KeyValue
                email: string
            }
        }
    }

    interface SessionUnauthorized {
        type: 'Unauthorized'
        message: string
    }

    interface SessionForbidden {
        type: 'Forbidden'
        message: string
    }


}