<template>
    <div class="container-left">
        <div class="header-left">
            <div class="user-image">
                <img :src="userGift.avatar" alt="cover" class="cover"/>
            </div>
            <h3 class="name">{{ userGift.name }}</h3>
            <div class="nav-icons">
                <i class="ml-2 fa fa-solid fa-circle-info"></i>
                <i class="ml-2 fa fa-solid fa-message"></i>
                <i class="ml-2 fa fa-solid fa-gear"></i>
            </div>
        </div>
        <div class="search-chat">
            <div class="div-search">
                <input
                    v-model="searchInput"
                    class="input-search"
                    placeholder="Search or start new chat"
                    type="text"
                    @keyup.enter="searchContact(searchInput)"
                />
                <i class="fa-brands fa-searchengin fa-bounce" @click="searchContact(searchInput)"></i>
            </div>
        </div>
        <div class="chat-list">
            <div :class=" viewNewAnimal ? 'bg-dark' : 'bg-white' " class="box-plus" @click.prevent="handleFormBox">
                <div class="box-image">
                    <img alt="newContact" class="img-fluid cover" src="../../../public/assets/logoplus.jpg">
                </div>
                <div class="details">
                    <div class="details-top">
                        <h4 class="name">NEW ANIMAL</h4>
                    </div>
                    <div class="details-down">
                        <p
                            class="last"
                        >
                            Add new contact
                        </p>
                    </div>
                </div>
            </div>

            <div
                v-for="(contact, index) in contactsGift"
                v-if="contact.visible"
                :class="index === activeIndex ? 'active' : ''"
                class="box"
                @click="activeIndex = index"
            >
                <div class="box-image">
                    <img :src="contact.avatar" class="img-fluid cover"/>
                </div>
                <div class="details">
                    <div class="details-top">
                        <h4 class="name">{{ contact.name }}</h4>
                        <p
                            v-if="contact.messages && contact.messages.length"
                            class="time"
                        >
                            {{
                                contact.messages[contact.messages.length - 1]
                                    .date
                            }}
                        </p>
                    </div>
                    <div class="details-down">
                        <p
                            v-if="contact.messages && contact.messages.length"
                            class="last"
                        >
                            {{
                                contact.messages[contact.messages.length - 1]
                                    .message
                            }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component left mounted.");
    },
    data: function () {
        return {
            activeIndex: null,
            searchInput: null,

            viewNewAnimal: false,
        };
    },
    props: {
        contactsGift: Array,
        userGift: Object,
    },
    watch: {
        activeIndex: function (newVal, oldVal) {
            console.log(newVal);

            this.$emit("activeChat", this.activeIndex);
        },
    },
    methods: {
        searchContact(arg) {
            // console.log(arg);
            arg = this.getTrimmed(arg);
            this.contactsGift.forEach((element) => {
                element.visible = this.getTrimmed(element.name).includes(arg);
            });
        },
        getTrimmed(stringToTrim) {
            return stringToTrim.trim().toLowerCase();
        },
        handleFormBox() {
            this.viewNewAnimal = !this.viewNewAnimal;
            this.$emit('viewNewAnimal', this.viewNewAnimal);
        }
    },
};
</script>

<style lang="scss" scoped>
.container-left {
    position: relative;

    flex: 30%;
    background: #f2f3f5;

    .header-left {
        height: 60px;
        background: #f6f6f6;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 10px;

        border-right: 1px solid #ffffff;

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
            //left: -50px;
            font-weight: bold;
            font-size: 0.8rem;

            margin: 0;
            width: fit-content;
        }

        .nav-icons {
            .fa {
                cursor: not-allowed;
                transition: 0.2s;

                &:hover {
                    opacity: 0.8;
                }
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
        background: #f2f3f5;
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

            transition: 1s ease-in-out;

            &:hover {
                background: black;

                .name {
                    color: white;
                }
            }
        }


        .box-plus {
            position: relative;
            width: 100%;

            display: flex;

            padding: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            cursor: pointer;

            height: 80px;

            border: 1px solid white;
            transition: 0.1s;

            &:hover {
                border: 4px solid white;
            }
        }

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
}
</style>
