<template>
  <AddEditNotes v-model="newNote" label="New Note">
    <template v-slot:buttons>
      <button
        @click="addNote"
        :disabled="!newNote"
        class="button is-link has-background-success"
      >
        Add New Note
      </button>
    </template>
  </AddEditNotes>
  <div class="card mb-4" v-for="note in notes" key="note.id">
    <div class="card-content">
      <div class="content" style="white-space:pre">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="showModal.value = true"
        >Delete</a
      >
    </footer>
    <delete-modal
      v-if="showModal.value"
      v-model="showModal.value"
      :noteId="note.id"
    />
  </div>
  <div
    v-if="!notes.length"
    class="
      is-size-4
      has-text-centered has-text-grey-light
      is-family-monospace
      py-6
    "
  >
    No notes here yet...
  </div>
 
</template>

<script setup>
import AddEditNotes from "@/components/widgets/AddEditNotes.vue";
import { ref, reactive,onMounted } from "vue";
import { useWatchCharacters } from "../../use/useWatchCharacters";
import { useNoteStore } from "../../stores/notes";
import DeleteModal from "../widgets/DeleteModal.vue";

const notesStore = useNoteStore();

let notes=notesStore.notes;

// onMounted(()=>{
//     notes = notesStore.notes;
//     console.log(notes)
// })


const newNote = ref("");

const addNote = () => {
  notesStore.addNote(newNote);
  newNote.value = "";
};

const showModal = reactive({ value: false });

// watch(newNote,(newValue)=>{
//     if(newValue.length>=100)
//     {
//         alert('value greater than 100')
//     }
// })

useWatchCharacters(newNote);
</script>