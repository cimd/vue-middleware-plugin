export interface route {
    query?: any;
    meta?: {
        name: string;
        title: string;
        middleware?: Function | Function[];
    };
    params?: {
        id: string | undefined;
    };
}
interface navigation {
    to: route;
    from: route;
    route: any;
}
export declare let request: any;
export declare let model: any;
export declare let params: any;
export declare const useController: () => {
    request: any;
    model: any;
    params: any;
};
export declare const useModel: () => any;
export declare const requestsInjection: (navigation: navigation) => Promise<void>;
export {};
