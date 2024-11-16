interface PlausibleFunction extends Function {
    q?: any[];
}

interface Window {
    plausible: PlausibleFunction;
}