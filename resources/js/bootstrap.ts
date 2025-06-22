const originalFetch = window.fetch.bind(window);

function getCookie(name: string) {
    const match = document.cookie.match(
        new RegExp('(^|;\\s*)' + name + '=([^;]*)'),
    );
    return match ? decodeURIComponent(match[2]) : null;
}

window.fetch = (input, init = {}) => {
    const headers = new Headers(init.headers);
    headers.set('X-Requested-With', 'XMLHttpRequest');
    const token = getCookie('XSRF-TOKEN');
    if (token) {
        headers.set('X-XSRF-TOKEN', token);
    }
    return originalFetch(input, {
        ...init,
        headers,
        credentials: init.credentials ?? 'same-origin',
    });
};
