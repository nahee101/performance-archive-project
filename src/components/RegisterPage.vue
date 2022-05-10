<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center" cols="8" offset="2"
            sm="6" offset-sm="3">
                <form @submit.prevent="fnRegisterUser">
                    <!-- 이메일 -->
                    <v-text-field name="email" label="이메일" type="email"
                    required v-model="sEmail"></v-text-field>
                    <!-- 패스워드 -->
                    <v-text-field name="password" label="패스워드" type="password"
                    required v-model="sPassword"></v-text-field>
                    <!-- 패스워드 확인: rules 속성 -->
                    <v-text-field name="password" label="패스워드 확인" type="password"
                    required v-model="sConfirmPassword"
                    :rules="[fnComparePassword]"></v-text-field>

                    <!-- 버튼 -->
                    <v-btn type="submit">회원가입</v-btn>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sEmail: '',
            sPassword: '',
            sConfirmPassword: ''
        }
    },
    computed: {
        fnComparePassword() {
            if(this.sPassword == this.sConfirmPassword) {
                return true;
            } else return '패스워드가 일치하지 않습니다'
        }
    },
    methods: {
        fnRegisterUser() {
            if(this.fnComparePassword == true) {
                this.$store.dispatch('fnRegisterUser', {
                    pEmail: this.sEmail,
                    pPassword: this.sPassword
                })
            }
        }
    }
}
</script>