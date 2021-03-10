<template>
  <div class="about">
    <v-row>
      <v-col cols="8">
        <a-input placeholder="enterID" v-model="idno" />
      </v-col>
      <v-col cols="4">
        <a-button @click="getdatafromServer()">submit</a-button>
      </v-col>
    </v-row>
    {{fetchData}}
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      idno: "",
      fetchData: ""
    };
  },
  methods: {
    getdatafromServer() {
      let url = `${this.api}api/sample?idno=${this.idno}`;
      axios.get(url).then(res => {
        this.fetchData = res.data;
      });
    }
  }
};
</script>
