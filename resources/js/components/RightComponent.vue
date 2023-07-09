<template>
    <div class="container-right">
        <div class="header-right">
            <div :class="viewProfile ? 'activeProfile': '' " class="user-image" @click="viewProfileFunction()">
                <img :alt="contactsGift[activeChatGift].name" :src="contactsGift[activeChatGift].avatar" class="cover">
            </div>
            <h4 class="activeName">{{ contactsGift[activeChatGift].name }}</h4>
            <div class="nav-icons">
                <i class="ml-2 fa-solid fa-search"></i>
                <i class="ml-2 fa-solid fa-gear"></i>
            </div>
        </div>

        <div v-if="viewProfile"
             :style="{ background: `url(${contactsGift[activeChatGift].avatar})` }" class="img-profile">
            <div v-if="viewProfile" class="remove-img-profile" @click="removeProfileFunction">
                <i class="fa fa-solid fa-circle-xmark fa-bounce"></i>
            </div>
        </div>


        <div class="chat-box">

            <div v-for="(message, index) in contactsGift[activeChatGift].messages" :key="index"
                 :class="(message.status === 'sent') ? 'justify-content-end' : 'justify-content-start'" class="message"
            >
                <div :class="(message.status === 'sent') ? 'my-message' : 'friend-message'">
                    <p class="txt-message-normal">{{ message.message }} <br> <span
                        :class="(message.status === 'sent') ? 'my-time' : 'friend-time'">{{ message.date }}</span></p>
                    <i class="fa fa-solid fa-circle-xmark fa-bounce " @click="removeMessageFunction(index)"></i>
                </div>
            </div>


        </div>
        <div class="footer-right">
            <div class="first">
                <i class="fa mr-3 fa-regular fa-face-smile fa-bounce"></i>
                <!--                <i class="fa fa-solid fa-paperclip"></i>-->
            </div>
            <div class="second">
                <input id="search" v-model="newMsgInput"
                       name="search" placeholder="Type a message" type="text" @keyup.enter="addNewMessage(newMsgInput)">
            </div>
            <div class="third">
                <i class="fa fa-regular fa-paper-plane fa-bounce" @click="addNewMessage(newMsgInput)"></i>
                <!--                <i class="fa fa-solid fa-microphone-slash"></i>-->
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    mounted() {
        console.log('Component right mounted.')
    },
    props: {
        contactsGift: Array,
        activeChatGift: Number,
        userGift: Object,
    },
    data: function () {
        return {
            newMsg: null,
            newMsgInput: null,
            viewProfile: false,
        }
    },
    methods: {
        addNewMessage(messageContent) {
            if (messageContent.length > 0) {
                this.newMsg = {
                    date: moment().format('D/M/YY, HH:mm:ss'),
                    message: messageContent.trim(),
                    status: 'sent',
                }
                this.$emit('newMsg', this.newMsg);
                this.newMsgInput = null;
            }
        },
        viewProfileFunction() {
            if (!this.viewProfile) {
                this.viewProfile = true;
            } else {
                this.viewProfile = false;
            }
        },
        removeProfileFunction() {
            return this.viewProfile = false;
        },
        removeMessageFunction(index) {
            this.$emit('index', index);
        },

    },
}
</script>


<style lang="scss" scoped>
.container-right:before {
    position: absolute;

    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 120px);


    content: "";

    //background: #f6f6f6;
    background: url("/assets/logo.png");


    background-repeat: no-repeat;
    background-position: center;
}

.container-right {
    position: relative;

    flex: 70%;
    background: #000000;

    .header-right {
        height: 60px;
        background: #f6f6f6;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        .user-image {
            position: relative;

            height: 40px;
            width: 40px;

            border-radius: 50%;

            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

            cursor: pointer;

            transition: 0.1s;


            .cover {
                position: absolute;
                top: 0;
                left: 0;

                overflow: hidden;

                border-radius: 50%;

                height: 100%;
                width: 100%;

                object-fit: cover;
            }
        }

        .activeProfile {
            border: 2px solid #05fa6f;
        }

        .activeName {
            margin: 0;
            font-weight: bolder;
        }

        .nav-icons {
            font-size: 1rem;
        }
    }

    .img-profile {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 400px;
        height: 400px;

        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;

        border: 2px solid white;
        z-index: 10;

    }

    .remove-img-profile {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0px;
        right: -30px;
        transform: translate(-50%, -50%);

        color: #ff0000;
        background: #fcfcfc;
        border-radius: 50%;

        z-index: 12;


        .fa {
            font-size: 30px;
            cursor: pointer;
        }

    }

    .chat-box {
        position: relative;

        width: 100%;
        height: calc(100% - 120px);
        padding: 50px;

        overflow-y: auto;

        .message {
            position: relative;
            margin: 5px 0;

            width: 100%;
            display: flex;

            transition: 0.2s;

            &:active {
                background: #4aa0e6;
                opacity: 0.8;
                border-radius: 0;
            }

            &:active .my-message {
                border-radius: 0;
                background: #4aa0e6;
            }

            &:active .my-message .txt-message-normal:before {
                opacity: 0;
            }

            &:active .friend-message {
                border-radius: 0;
                background: #4aa0e6;
            }

            &:active .friend-message .txt-message-normal:before {
                opacity: 0;
            }

            p {
                margin: 0;
                font-size: 0.8rem;
            }


        }


        .my-message {
            position: relative;
            max-width: 65%;


            text-align: right;
            background: #fffbdb;

            padding: 8px 20px 0 20px;


            border-radius: 10px;
            transition: 0.2s;

            .fa {
                position: absolute;
                top: -12px;
                left: -12px;
                font-size: 25px;

                color: red;
                background: white;
                border-radius: 50%;

                opacity: 0;

                transition: 0.2s;

                cursor: pointer;
            }

            &:hover .fa {
                opacity: 1;
            }

            &:active .fa {
                opacity: 0;
            }


            .my-time {
                font-size: 0.8rem;
                opacity: 0.5;
            }

            .txt-message-normal::before {
                content: "";
                position: absolute;
                top: 0;
                right: -15px;
                width: 25px;
                height: 25px;
                background: linear-gradient(135deg, #fffbdb 0%, #fffbdb 50%, transparent 50%, transparent);

                transition: 0.2s;
            }

        }

        .friend-message {
            position: relative;

            max-width: 65%;

            text-align: left;

            background: rgb(255, 229, 229);

            padding: 8px 15px 0 15px;
            border-radius: 10px;

            transition: 0.2s;


            .fa {
                position: absolute;
                top: -12px;
                right: -12px;
                font-size: 25px;

                color: red;
                background: white;
                border-radius: 50%;

                opacity: 0;

                transition: 0.2s;

                cursor: pointer;
            }

            &:hover .fa {
                opacity: 1;
            }

            &:active .fa {
                opacity: 0;
            }

            .friend-time {
                font-size: 0.8rem;
                opacity: 0.5;
            }

            .txt-message-normal::before {
                content: "";
                position: absolute;
                top: 0;
                left: -15px;
                width: 25px;
                height: 25px;
                background: linear-gradient(-135deg, rgb(255, 229, 229) 0%, rgb(255, 229, 229) 50%, transparent 50%, transparent);

                transition: 0.2s;

            }
        }

    }

    .footer-right {
        height: 60px;
        width: 100%;
        background: white;

        padding: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #F2F3F5;

        .first {
            width: 10%;
            display: flex;
            justify-content: center;

            font-size: 1.3rem;

            .fa {
                cursor: pointer;
                transition: 0.1s;

                &:active {
                    font-size: 30px;
                }
            }
        }

        .second {
            width: 80%;


            #search {
                width: 100%;
                border: none;
                outline: none;

                border-radius: 20px;
                padding: 8px 15px;
                font-size: 0.8rem;

                background: white;
            }
        }

        .third {
            width: 10%;
            display: flex;
            justify-content: center;

            font-size: 1.3rem;

            .fa {
                cursor: pointer;
                transition: 0.1s;

                &:active {
                    font-size: 30px;
                }
            }
        }
    }
}
</style>
