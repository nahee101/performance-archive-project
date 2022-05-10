<template>
  <div id="app">

    <v-card>
      <!-- 안드로이드 시스템처럼 보여주기 위함 -->
      <v-system-bar color="indigo darken-4" dark>
        <v-spacer></v-spacer>
        <v-icon>mdi-window-minimize</v-icon>
        <v-icon>mdi-window-maximize</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-system-bar>

      <!-- 앱 바 -->
      <v-app-bar color="indigo" dark flat>
        <v-app-bar-nav-icon @click.stop="ndrawer=!ndrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>공연 아카이브</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- 검색창 -->
        <v-text-field label="Search" 
        clearable hide-details
        prepend-inner-icon="mdi-magnify"></v-text-field>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-with title>
            <v-tabs-slider color="cyan"></v-tabs-slider>
            <v-tab
            v-for="(category, index) in categories" :key="index"
            v-bind:class="{active: currentTab === index}"
            @click="currentTab = index">
              {{category}}
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>

    <!-- 네비게이션 서랍 -->            
    <!-- 네비게이션 서랍: 사용자 정보 및 메뉴 -->
    <div id="gnbDrawer">
      <v-navigation-drawer 
      v-model="ndrawer" absolute temporary>
        <!-- 로그인 상태 -->
        <div v-if="fnGetAuthStatus">
          <!-- 사용자 정보 -->
          <v-toolbar flat height="70">
            <v-list>
              <v-list-item>
                <!-- 사용자 프로필 사진 -->
                <v-list-item-avatar>
                  <img v-if="fnGetUser.photoURL" 
                  :src="fnGetUser.photoURL" class="avatar_style">
                </v-list-item-avatar>
                                  
                <!-- 사용자 이메일 -->
                <v-list-item-content>
                  <v-list-item-title>
                    <!-- 이메일 -->
                    {{fnGetUser.email}}
                  </v-list-item-title>      
                  <v-list-item-subtitle>
                    <!-- 이메일 님 안녕하세요 -->
                    {{fnGetUser.email}} 님 안녕하세요!
                  </v-list-item-subtitle>                
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-toolbar>
      
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-btn text>내가 본 공연</v-btn>
              </v-list-item-content>
              <v-list-item-content>
                <v-btn text>내가 쓴 후기</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <!-- 로그아웃 상태 -->
        <div v-else>
          <!-- 사용자 정보 -->
          <v-toolbar flat height="70">
            <v-list>
              <v-list-item>
                <!-- 사용자 프로필 사진 -->
                <v-list-item-avatar color = "primary">
                </v-list-item-avatar>
                                  
                <!-- 사용자 닉네임 -->
                <v-list-item-content>
                  <v-list-item-title>
                    안녕하세요
                  </v-list-item-title>      
                  <v-list-item-subtitle>
                    로그아웃 상태입니다
                  </v-list-item-subtitle>                
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-toolbar>
      
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-btn text to="/account">로그인</v-btn>
              </v-list-item-content>
              <v-list-item-content>
                <v-btn text to="/register">회원가입</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
    
        <v-divider></v-divider>
                    
        <!--gnb 메뉴-->
        <v-list class = "pt-3">
          <v-list-item
          v-for = "item in gnbList" :key = "item.gnb" :href = "item.link">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
    
            <v-list-item-content>
              <v-list-item-title>
                {{item.gnb}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!--네비게이션 서랍 끝-->
    </div>

    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      /* 네비게이션 서랍 관련 */
      ndrawer: false,
      gnbList: [
        {gnb: '뮤지컬', link: '#', icon: 'mdi-chevron-right'},
        {gnb: '연극', link: '#', icon: 'mdi-chevron-right'},
        {gnb: '콘서트', link: '#', icon: 'mdi-chevron-right'},
        {gnb: '클래식/무용', link: '#', icon: 'mdi-chevron-right'},
        {gnb: '매거진', link: '#', icon: 'mdi-chevron-right'}
      ],

      /* 탭 관련 */
      tab: null,
      categories: ['라이선스/내한 뮤지컬', '창작 뮤지컬'],
      currentTab: 0,

    }
  },
  computed: {
    fnGetUser() {
      let oUserInfo = this.$store.getters.fnGetUser
      return oUserInfo
    },
    //스토어에서 현재 인증상태인지를 반환(로그인)
    fnGetAuthStatus() {
      return this.$store.getters.fnGetAuthStatus
    }
  }
}
</script>
