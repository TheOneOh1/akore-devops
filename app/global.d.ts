interface PlausibleFunction extends Function {
    q?: any[];
}

interface Window {
    plausible: PlausibleFunction;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
}