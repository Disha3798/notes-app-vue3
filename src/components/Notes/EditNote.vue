<template>
    <AddEditNotes v-model="noteContent"
     bgColor='link'
     label='Edit Note'>
    <template v-slot:buttons>
      <button
        @click="editNote"
        :disabled="!noteContent"
        class="button is-link has-background-success"
      >
        Edit Note
      </button>
    </template>
  </AddEditNotes>

  <RouterLink :to="`/`" class="has-text-link ml-4">Back</RouterLink>
</template>

<script setup>
import AddEditNotes from "@/components/widgets/AddEditNotes.vue";
import {ref} from 'vue'
import {useNoteStore} from '../../stores/notes'
import {useRoute,useRouter} from 'vue-router';

const store=useNoteStore()

const route=useRoute()
const router=useRouter()

let noteContent=ref('')

noteContent.value=store.getNote(route.params.id)


const editNote=()=>{
    store.editNote(noteContent.value,route.params.id)
    router.push('/')
}



</script>