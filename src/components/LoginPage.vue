<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">이메일 로그인 페이지</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center" cols="8" offset="2"
            sm="6" offset-sm="3">
                <form @submit.prevent="fnDoLogin">
                    <!-- 이메일 -->
                    <v-text-field name="email" label="이메일" type="email"
                    required v-model="sEmail"></v-text-field>
                    <!-- 패스워드 -->
                    <v-text-field name="password" label="패스워드" type="password"
                    required v-model="sPassword"></v-text-field>
                    <!-- 버튼 -->
                    <v-btn type="submit">로그인</v-btn>
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
            sPassword: ''
        }
    },
    methods: {
        fnDoLogin() {
            this.$store.dispatch('fnDoLogin', {
                pEmail: this.sEmail,
                pPassword: this.sPassword
            })
        }
    }
}
</script>