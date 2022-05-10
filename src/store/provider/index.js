/* 구글 인증 관련 내용만 따로 작성한 store 모듈 */

/* 파이어베이스 앱 객체 모듈 */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

/* 라우터 사용 */
import router from '@/router';

export default {
    state: {
        //사용자 정보를 담을 객체
        oUser: null
    },
    mutations: {
        //사용자 객체 저장
        fnSetUser(state, payload) {
            state.oUser = payload;
        }
    },
    getters: {
        //사용자 객체 반환
        fnGetUser(state) {
            return state.oUser;
        },
        //사용자 객체값의 유무 -> 로그인 여부 판단
        fnGetAuthStatus(state) {
            return state.oUser != null;
        }
    },
    actions: {
        /* 이메일 회원가입 처리 */
        fnRegisterUser({commit}, payload) {
            //파이어베이스에 이메일 회원 생성 및 저장 과정
            firebase
            .auth()
            .createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then((pUserInfo) => {
                //신규 회원의 이메일 정보를 스토어에 저장한다
                commit('fnSetUser', {
                    email: pUserInfo.user.email
                });
                
                router.push('/');
            })
        },
        /* 이메일 로그인 */
        fnDoLogin({commit}, payload) {
            firebase
            .auth()
            .signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
            .then((pUserInfo) => {
                //로그인이 성공하면 스토어에 계정의 정보를 저장한다
                commit('fnSetUser', {
                    id: pUserInfo.user.uid,
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL
                });
                router.push('/');
            })
        },
        /* 구글 계정 회원 로그인(팝업) */
        fnDoGoogleLogin_Popup({commit}) {
            //파이어베이스에 구글 회원 로그인 인증 처리 요청
            //로그인 제공자 객체 생성
            const oProvider = new firebase.auth.GoogleAuthProvider();
            //오픈 계정의 범위(가져오는 값)
            oProvider.addScope('profile');
            oProvider.addScope('email');

            //로그인 요청
            firebase
            .auth()
            .signInWithPopup(oProvider)
            .then((pUserInfo) => {
                //로그인이 성공하면 스토어에 계정의 정보 저장
                console.log('요청 성공 확인');
                commit('fnSetUser', {
                    id: pUserInfo.user.uid,
                    name: pUserInfo.user.displayName,
                    email: pUserInfo.user.email,
                    photoURL: pUserInfo.user.photoURL
                });
                router.push('/');
            })
        }
    }
}