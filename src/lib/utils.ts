import { useEffect, useRef } from "react";
import { Cookies } from 'react-cookie';

export const cookieKey = "chal_user";

// https://stackoverflow.com/questions/38416020/deep-copy-in-es6-using-the-spread-syntax
export function deepClone(obj: any): any {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }
  
    if(obj instanceof Date) {
        return new Date(obj.getTime());
    }
  
    if(obj instanceof Map) {
        return new Map(Array.from(obj.entries()));
    }
  
    if(obj instanceof Array) {
        return obj.reduce((arr, item, i) => {
            arr[i] = deepClone(item);
            return arr;
        }, []);
    }
  
    if(obj instanceof Object) {
        return Object.keys(obj).reduce((newObj: any, key) => {
            newObj[key] = deepClone(obj[key]);
            return newObj;
        }, {})
    }
}
  
export function mapKeys<TKey, TVal>(map: Map<TKey, TVal>): TKey[] {
    return Array.from(map.keys()) || [];
}

export function mapValues<TKey, TVal>(map: Map<TKey, TVal>): TVal[] {
    return Array.from(map.values()) || [];
}

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef(callback);
  
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export function getUserId(): string {
    let cookies = new Cookies();
    return cookies.get(cookieKey);
}

export function setUserId(id?: string) {
    let existingId = getUserId();
    let userId = id || existingId || generateId();

    let cookies = new Cookies();
    let oneYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    cookies.set(cookieKey, userId, {expires: oneYear, sameSite: 'none', secure: true});
}

export function generateId(): string {
    let charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-';
    let id = "";
    for (let i=0; i<11; i++) {
        id += charPool[getRandomInt(64)];
    }
    return id;
}

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export function getQueryParam(key: string, defaultValue?: string): string {
    let match = document.location.href.match(`[?&]${key}=([^&]+)`);
    let result = defaultValue || "";
    if (match)
        result = match[1];

    return result;
}
