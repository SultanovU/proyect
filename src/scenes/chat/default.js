import { createContext } from 'react'
export const HostContext = createContext('localhost')
export let currentUser = createContext<({
    id: 0,
    name: '',
    lastname: '',
    phoneNumber: 0,
    role: '',
    lastMessage: null,
    lastMessageID: '',
    messages: [],
    connectedCourses: [],
    connectedChats: [],
})

export let chattingUser = createContext<({
    id: 0,
    name: '',
    lastname: '',
    phoneNumber: 0,
    role: '',
    lastMessage: null,
    lastMessageID: '',
    messages: [],
    connectedCourses: [],
    connectedChats: [],
})
