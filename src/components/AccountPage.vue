<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center mt-5">
                <h1 class="display-1 my-1">로그인 페이지</h1>
            </v-col>

            <v-col cols="6" offset="3" class="text-center mt-5">
                <v-btn outlined color="red" large block>
                    <v-icon>mdi-google</v-icon>
                    구글 로그인
                </v-btn>
            </v-col>

            <v-col cols="6" offset="3" class="text-center mt-5">
                <v-btn to="/login" color="red" large block>
                    <v-icon>mdi-email</v-icon>
                    이메일 로그인
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
}
</script>