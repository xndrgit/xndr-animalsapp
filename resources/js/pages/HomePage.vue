<template>
    <div class="spiderapp">
        <LeftComponent :contactsGift="contacts" :userGift="user" @activeChat="activeChatFunction"/>
        <RightComponent :activeChatGift="activeChat" :contactsGift="contacts" :userGift="user"
                        @activeChatDelete="clearChat" @index="removeFunction"

                        @cowMsg="cowMsgFunction"

                        @dogAct="dogActFunction"
                        @dogMsg="dogMsgFunction"

                        @newMsg="pushFunction"
                        @puchoMsg="puchoMsgFunction"

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
            activeChat: -1,
            user: {
                name: "AnimalsApp",
                avatar: "/assets/logo.png",
            },
            contacts: [
                {
                    name: "Dog",
                    avatar: "/assets/dog.jpg",
                    visible: true,
                    messages: [
                        {date: "2022-06-01T10:30:00Z", message: "Hey, how's it going?", status: "sent"},
                        {
                            date: "2022-06-01T10:35:00Z",
                            message: "Bau!",
                            status: "received"
                        },
                        {
                            date: "2022-06-01T10:40:00Z",
                            message: "I'm doing well. What have you been up to?",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Pucho",
                    avatar: "/assets/pucho.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "2022-06-02T08:15:00Z",
                            message: "Grrr",
                            status: "received"
                        },
                        {
                            date: "2022-06-02T08:20:00Z",
                            message: "Definitely. I've been prepping all week.",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Cow",
                    avatar: "/assets/cow.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Sheep",
                    avatar: "/assets/sheep.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "2022-06-03T14:45:00Z",
                            message: "Hey, can you send me the report you mentioned?",
                            status: "sent"
                        },
                        {
                            date: "2022-06-03T14:50:00Z",
                            message: "Beeeee",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Horse",
                    avatar: "/assets/horse.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Elephant",
                    avatar: "/assets/elephant.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Giraffe",
                    avatar: "/assets/giraffe.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Lion",
                    avatar: "/assets/lion.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Tiger",
                    avatar: "/assets/tiger.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Penguin",
                    avatar: "/assets/penguin.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Kangaroo",
                    avatar: "/assets/kangaroo.jpg",
                    visible: true,
                    messages: []
                },
                {
                    name: "Monkey",
                    avatar: "/assets/monkey.jpg",
                    visible: true,
                    messages: []
                }
            ],
            viewProfile: false,

            dogAct: null,
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

        dogActFunction(arg) {
            this.dogAct = arg;
        },
        dogMsgFunction(dogMsg) {
            this.contacts[this.dogAct].messages.push(dogMsg);
        },

        puchoActFunction(arg) {
            this.puchoAct = arg;
        },
        puchoMsgFunction(puchoMsg) {
            this.contacts[this.activeChat].messages.push(puchoMsg);
        },

        cowActFunction(arg) {
            this.cowAct = arg;
        },
        cowMsgFunction(cowMsg) {
            this.contacts[this.activeChat].messages.push(cowMsg);
        },

        sheepActFunction(arg) {
            this.sheepAct = arg;
        },
        sheepMsgFunction(sheepMsg) {
            this.contacts[this.activeChat].messages.push(sheepMsg);
        }
    }
}
</script>

<style lang="scss" scoped>
.spiderapp {
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
