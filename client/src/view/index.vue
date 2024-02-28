<!-- @format -->

<script>
  import API from "../api";
  export default {
    data() {
      return {
        rules: [(value) => !!value || "This field is required!"],
        post: {
          title: "",
          category: "",
          content: "",
          image: "",
        },
        image: "",
      };
    },
    methods: {
      selectFile(file) {
        this.image = file[0];
      },
      async submitForm() {
        const formData = new FormData();
        formData.append("image", this.image);
        formData.append("title", this.post.title);
        formData.append("category", this.post.category);
        formData.append("content", this.post.content);
        if (this.$refs.form.validate()) {
          const response = await API.addPost(formData);
          this.$router.push({
            name: "home",
            params: { message: response.message },
          });
        }
      },
    },
  };
</script>
