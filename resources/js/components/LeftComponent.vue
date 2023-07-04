<template>
    <div class="container-left">
        <div class="header-left">
            <div class="user-image">
                <img :src="user.avatar" alt="cover" class="cover">
            </div>
            <h3 class="name">{{ user.name }}</h3>
            <div class="nav-icons">
                <i class="ml-2 fa fa-solid fa-circle-info"></i>
                <i class="ml-2 fa fa-solid fa-message"></i>
                <i class="ml-2 fa fa-solid fa-gear"></i>
            </div>
        </div>
        <div class="search-chat">
            <div class="div-search">
                <input class="input-search" placeholder="Search or start new chat" type="text">
                <i class="fa-brands fa-searchengin fa-bounce"></i>
            </div>
        </div>
        <div class="chat-list">

            <div v-for="(contact, index) in contacts"
                 :class="(index === activeIndex) ? 'active' : ''" class="box"
                 @click="activeIndex = index"
            >
                <div class="box-image">
                    <img :src="contact.avatar"
                         class="img-fluid cover">
                </div>
                <div class="details">
                    <div class="details-top">
                        <h4 class="name">{{ contact.name }}</h4>
                        <p class="time">contact</p>
                    </div>
                    <div class="details-down">
                        <p class="last">New haha skam asdas d as as das das das das e </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component left mounted.')
    },
    data: function () {
        return {
            activeIndex: null,
            user: {
                name: "Ghost House",
                avatar: "/assets/miles.jpg",
            },
            contacts:
                [
                    {
                        name: "John Doe",
                        avatar: "https://example.com/avatar1.png",
                        visible: true,
                        messages: [
                            {date: "2022-06-01T10:30:00Z", message: "Hey, how's it going?", status: "sent"},
                            {
                                date: "2022-06-01T10:35:00Z",
                                message: "Not bad, thanks. How about you?",
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
                        name: "Jane Smith",
                        avatar: "https://example.com/avatar2.png",
                        visible: true,
                        messages: [
                            {
                                date: "2022-06-02T08:15:00Z",
                                message: "Good morning! Ready for the big meeting today?",
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
                        name: "Bob Johnson",
                        avatar: "https://example.com/avatar3.png",
                        visible: false,
                        messages: []
                    },
                    {
                        name: "Alice Lee",
                        avatar: "https://example.com/avatar4.png",
                        visible: true,
                        messages: [
                            {
                                date: "2022-06-03T14:45:00Z",
                                message: "Hey, can you send me the report you mentioned?",
                                status: "sent"
                            },
                            {
                                date: "2022-06-03T14:50:00Z",
                                message: "Sure, I'll send it to you now.",
                                status: "received"
                            }
                        ]
                    }
                ],
        }
    }
}
</script>

<style lang="scss" scoped>
.container-left {
    position: relative;

    flex: 30%;
    background: #fff;

    border-right: 1px solid #ffffff;

    .header-left {
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

        .name {
            position: relative;
            left: -50px;
            font-weight: bold;
            font-size: 0.8rem;

            margin: 0;
            width: fit-content;
        }

        .nav-icons {
            .fa {
                cursor: pointer;
            }
        }
    }

    .search-chat {
        position: relative;

        width: 100%;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #f6f6f6;

        padding: 0 15px;

        .div-search {
            width: 100%;

            .input-search {
                width: 100%;

                outline: none;
                border: none;
                border-radius: 30px;

                background: #fff;
                font-size: 10px;

                padding: 10px;
                padding-left: 40px;

                &:focus {
                    background: #f6f6f6;
                }
            }

            .fa-searchengin {
                position: absolute;
                left: 18px;
                top: 8px;
                font-size: 1.4rem;
                cursor: pointer;

                background: #f6f6f6;
                border-radius: 50px;
                border: 3px solid white;
                padding: 0.2rem;

                transition: 0.5s;

                &:hover {
                    background: #f6f6f6;
                }

            }
        }
    }

    .chat-list {
        height: calc(100% - 110px);
        background: #f6f6f6;
        overflow-y: auto;

        .active {
            background: rgba(0, 0, 0, 1);
            color: white;
        }

        .box {
            position: relative;
            width: 100%;

            display: flex;

            padding: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            cursor: pointer;

            height: 80px;

            transition: .2s;


            .box-image {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20%;

                margin-right: 15px;

                .cover {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                }
            }

            .details {
                width: 80%;

                display: flex;
                flex-direction: column;
                justify-content: center;


                .details-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .name {
                        font-size: 14px;
                        font-weight: bold;

                        margin: 0;

                        transition: 0.1s;
                    }

                    .time {
                        font-size: 10px;
                        font-weight: lighter;
                        color: #aaa;

                        margin: 0;
                    }

                }

                .details-down {
                    .last {
                        margin-bottom: 0;
                        color: #aaa;
                        font-size: 12px;
                        width: 180px; /* Set the width of the container */
                        overflow: hidden; /* Hide the text that overflows the container */
                        text-overflow: ellipsis; /* Show an ellipsis when the text overflows */
                        white-space: nowrap; /* Prevent the text from wrapping */
                    }
                }
            }
        }

        .box:hover {
            background: black;

            .name {
                color: white;
            }
        }
    }
}
</style>
