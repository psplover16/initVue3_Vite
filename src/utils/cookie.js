// 在main.js先引用 vue-cookies
export function clearCookies() {
    removeToken();
    removePlayerid();
}
export function setToken(val) {
    // $cookies.set("token", val, '10s')  // 名稱/值/持續時間(沒寫就用global)
    $cookies.set("token", val)
}
export function getToken() {
    return $cookies.get("token")
}
export function removeToken() {
    $cookies.remove("token")
}
export function setPlayerid(val) {
    $cookies.set("playerid", val)
}
export function getPlayerid(val) {
    return $cookies.get("playerid")
}
export function removePlayerid() {
    $cookies.remove("playerid")
}