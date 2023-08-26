<template>
    <div class="animalsapp">

        <LeftComponent
            :contactsGift="contacts" :userGift="user" @activeChat="activeChatFunction"
            @viewNewAnimal="handleForm"
        />
        <RightComponent
            :activeChatGift="activeChat" :contactsGift="contacts" :userGift="user"
            :viewFormGift="viewForm" @activeChatDelete="clearChat" @cowMsg="cowMsgFunction"
            @dogMsg="dogMsgFunction"
            @index="removeFunction"
            @newContact="newContactFunction"
            @newMsg="pushFunction"
            @puchoMsg="pMsgFunction"
            @sheepMsg="sheepMsgFunction"
        />

    </div>
</template>

<script>
import LeftComponent from "../components/LeftComponent.vue";
import RightComponent from "../components/RightComponent.vue";

export default {
    data: function () {
        return {
            activeChat: 0,
            user: {
                name: "AnimalsApp",
                avatar: "/assets/logo.png",
            },
            contacts: [
                {
                    name: "Dog",
                    avatar: "/assets/dog.png",
                    visible: true,
                    active: true,
                    messages: [
                        {
                            date: "2022-06-01T10:35:00Z",
                            message: "Bau!",
                            status: "received"
                        },
                    ]
                },
                {
                    name: "Pucho",
                    avatar: "/assets/pucho.png",
                    visible: true,
                    active: true,
                    messages: [
                        {
                            date: "2022-06-02T08:15:00Z",
                            message: "Grrr",
                            status: "received"
                        },
                    ]
                },
                {
                    name: "Cow",
                    avatar: "/assets/cow.png",
                    visible: true,
                    active: false,
                    messages: [
                        {
                            date: "2022-06-02T08:15:00Z",
                            message: "Muuuu",
                            status: "received"
                        },
                    ]
                },
                {
                    name: "Sheep",
                    avatar: "/assets/sheep.png",
                    visible: true,
                    active: false,
                    messages: [
                        {
                            date: "2022-06-03T14:50:00Z",
                            message: "Beeeee",
                            status: "received"
                        }
                    ]
                },
            ],
            viewProfile: false,
            viewForm: false,

            dogAct: 0,
            puchoAct: 1,
            cowAct: 2,
            sheepAct: 3,
        }
    },
    name: 'HomePage.vue',
    components: {
        LeftComponent,
        RightComponent
    },
    methods: {
        activeChatFunction(arg) {
            this.activeChat = arg;
        },
        pushFunction(newMsg) {
            this.contacts[this.activeChat].messages.push(newMsg);
        },
        removeFunction(index) {
            this.contacts[this.activeChat].messages.splice(index, 1);
        },
        clearChat(activeChat) {
            this.contacts[activeChat].messages = [];
        },

        // IS WORKING but just this
        // dogActFunction(arg) {
        //     this.dogAct = arg;
        // },
        dogMsgFunction(dogMsg) {
            this.contacts[this.dogAct].messages.push(dogMsg);
        },
        // IS NOT CALLED
        // pActFunction: function(arg) {
        //     this.puchoAct = arg;
        // },
        pMsgFunction(puchoMsg) {
            this.contacts[this.puchoAct].messages.push(puchoMsg);
        },
        // IS NOT CALLED
        // cowActFunction(arg) {
        //     this.cowAct = arg;
        // },
        cowMsgFunction(cowMsg) {
            this.contacts[this.cowAct].messages.push(cowMsg);
        },
        // IS NOT CALLED
        // sheepActFunction(arg) {
        //     this.sheepAct = arg;
        // },
        sheepMsgFunction(sheepMsg) {
            this.contacts[this.sheepAct].messages.push(sheepMsg);
        },
        handleForm() {
            this.viewForm = !this.viewForm;
        },

        newContactFunction(newContact) {
            this.contacts.push(newContact);
        }
    }
}
</script>

<style lang="scss" scoped>
.animalsapp {
    display: flex;

    min-width: 1100px;
    width: 80vw;
    height: calc(100vh - 60px);
    background: #fff;

    /*box-shadow: h-shadow v-shadow blur spread color inset;*/
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);

    /*fix*/
    padding: 0;
}
</style>
