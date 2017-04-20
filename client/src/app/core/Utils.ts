/* tslint:disable */
export class Utils {

    public static parseObject(srcObj: any, dstObj: any, options: any = {}): void {
        let o = srcObj;
        let d = dstObj;
        let copy = [];
        let copyAll = false;
        let ignore = [];
        let logErrors = true;
        let map = {};
        if (options) {
            if (options.copy !== undefined) {
                if (options.copy === true) {
                    copyAll = true;
                } else if (Array.isArray(options.copy)) {
                    copy = options.copy;
                }
            }
            if (options.copy && Array.isArray(options.copy)) {
                copy = options.copy;
            }
            if (options.ignore && Array.isArray(options.ignore)) {
                ignore = options.ignore;
            }
            if (options.logErrors !== undefined) {
                logErrors = options.logErrors;
            }
            if (options.map !== undefined) {
                map = options.map;
            }
        }
        for (let p in o) {
            if (copyAll || copy.includes(p)) {
                try {
                    d[p] = o[p];
                    if (d['__'] !== undefined) {
                        d['__'][p] = o[p];
                    }
                } catch (e) {
                    console.error(e);
                }
            } else if (!ignore.includes(p)) {
                let p_ = p;
                let valid = true;
                let v = o[p];
                if (map[p] !== undefined) {
                    p_ = map[p];
                }
                if (d[p_] === undefined) {
                    p_ = 'is{0}'.format(p);
                    if (d[p_] === undefined) {
                        p_ = '{0}{1}'.format(p.charAt(0).toLowerCase(), p.substr(1));
                        if (d[p_] === undefined) {
                            p_ = 'is{0}'.format(p.charAt(0).toUpperCase(), p.substr(1));
                            if (d[p_] === undefined) {
                                valid = false;
                                if (logErrors) {
                                    console.warn('property "{0}" not found on {1}'.format(p, d.className));
                                }
                            }
                        }
                    }
                }
                if (valid) {
                    try {
                        switch (typeof (d[p_])) {
                            case 'boolean':
                                if (String.isNullOrEmpty(v)) {
                                    d[p_] = false;
                                } else {
                                    let b = v.toString().toLowerCase();
                                    d[p_] = b.toBoolean();
                                }
                                break;
                            case 'number':
                                if (String.isNullOrEmpty(v)) {
                                    d[p_] = 0;
                                } else {
                                    let v_ = 0;
                                    if (v.toString().split('.').length > 1) {
                                        v_ = parseFloat(v);
                                    } else {
                                        v_ = parseInt(v);
                                    }
                                    d[p_] = isNaN(v_) ? 0 : v_;
                                }
                                break;
                            default:
                                d[p_] = v;
                                break;
                        }
                        if (d['__'] !== undefined) {
                            d['__'][p_] = d[p_];
                        }
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        }
    }
}
/* tslint:enable */
