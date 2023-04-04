<template>
  <div v-for="(tag, index) in tags">
    {{ tag }}
    <a href="#" @click.prevent="removeTag(index)">&times;</a>
  </div>
  <hr />
  <pre>
    {{ newTag }}
  </pre>
  <input
    v-model.trim="newTag"
    @keydown.enter="addNewTag"
    @keydown.tab.prevent="addNewTag"
    @keydown.delete="removeLastTag"
    :style="tags.includes(newTag) ? 'color:red' : ' '"
    placeholder="Kosong"
  />
  <br />
  <br />
  <button @click="removeAllTag">HAPUS SEMUA</button>
</template>

<script>
export default {
  data: () => ({
    tags: ['Bhs Inggris', 'Indo'],
    newTag: 'JAWA',
  }),
  methods: {
    addNewTag() {
      if (this.newTag) {
        this.tags.push(this.newTag);
        this.newTag = '';
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
    removeLastTag() {
      if (this.newTag.length === 0) {
        this.removeTag(this.tags.length - 1);
      }
    },
    removeAllTag() {
      this.tags = [];
      this.newTag = '';
    },
  },
};
</script>
