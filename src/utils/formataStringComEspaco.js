export function formataStringComEspaco(string = '') {
    return string?.replace(/ {2,}/g, ' ')?.replace(/(\n\s*){2,}/g, '\n');
}