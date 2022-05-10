/* 파이어베이스 앱 객체 모듈 가져오기 */
/* 파이어베이스9버전이기 때문에 /compat를 함께 작성한다 */
import firebase from "firebase/compat/app"

/* 파이어베이스 초기화 */
const oFirebase = firebase.initializeApp({
    //본인의 파이어베이스 키 값
    apiKey: "AIzaSyBS9cY6EGCKXnkGM6wjDT3o_grnsfc2mjw",
    //본인의 파이어베이스 도메인 값
    authDomain: "archive-project-a5ed9.firebaseapp.com",
});

/* 파이어베이스 인증 객체 모듈로 사용 */
export const oFirebaseAuth = oFirebase.auth();