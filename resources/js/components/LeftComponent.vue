<template>
    <div class="container-left">
        <div class="header-left">
            <div class="user-image">
                <img :src="userGift.avatar" alt="cover" class="* disabled-cursor ? cover"/>
            </div>
            <h3 class="name">{{ userGift.name }}</h3>
            <div class="nav-icons">
                <i class="* disabled-cursor ? ml-2 fa fa-solid fa-circle-info"></i>
                <i class="* disabled-cursor ? ml-2 fa fa-solid fa-message"></i>
                <i class="* disabled-cursor ? ml-2 fa fa-solid fa-gear"></i>
            </div>
        </div>

        <div v-if="viewNewAnimal" class="search-chat-disabled">
        </div>
        <div v-if="!viewNewAnimal" class="search-chat">
            <div class="div-search">
                <input
                    v-model="searchInput"
                    class="input-search"
                    placeholder="Search for a chat"
                    type="text"
                    @keyup="searchContact(searchInput)"
                />
                <i class="fa-brands fa-searchengin fa-bounce" @click="searchContact(searchInput)"></i>
            </div>
        </div>

        <div class="chat-list">

            <div :class=" viewNewAnimal ? 'text-success' : 'text-danger' " class="box-plus"
                 @click.prevent="handleFormBox">
                <div class="box-image">
                    <img alt="newContact" class="img-fluid cover" src="../../../public/assets/logoplus.jpg">
                </div>
                <div class="details">
                    <div class="details-top">
                        <h4 class="name">MANAGE ANIMALS</h4>
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
                v-if="contact.visible && contact.active && !viewNewAnimal"
                :class=" index === activeIndex ? 'active ' : '' "
                class="box"
                @click="activeIndex = index"
            >

                <!--                    <div v-if="viewNewAnimal" class="disabled-chat">-->

                <!--                    </div>-->

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

            <!--            <div class="no-animals-founded">-->
            <!--                    <div class="box-plus">-->
            <!--                        <div class="box-image">-->
            <!--                            <i class="fa fa-solid fa-dog"></i>-->
            <!--                        </div>-->
            <!--                        <div class="details">-->
            <!--                            <div class="details-top">-->
            <!--                                <h4 class="name">NO ANIMALS FOUNDED!</h4>-->
            <!--                            </div>-->
            <!--                            <div class="details-down">-->
            <!--                                <p-->
            <!--                                    class="last"-->
            <!--                                >-->
            <!--                                    Add animals!!-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="box-plus">-->
            <!--                        <div class="box-image">-->
            <!--                            <i class="fa fa-solid fa-cat"></i>-->
            <!--                        </div>-->
            <!--                        <div class="details">-->
            <!--                            <div class="details-top">-->
            <!--                                <h4 class="name">NO ANIMALS FOUNDED!</h4>-->
            <!--                            </div>-->
            <!--                            <div class="details-down">-->
            <!--                                <p-->
            <!--                                    class="last"-->
            <!--                                >-->
            <!--                                    Add animals!!-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="box-plus">-->
            <!--                        <div class="box-image">-->
            <!--                            <i class="fa fa-solid fa-dragon"></i>-->
            <!--                        </div>-->
            <!--                        <div class="details">-->
            <!--                            <div class="details-top">-->
            <!--                                <h4 class="name">NO ANIMALS FOUNDED!</h4>-->
            <!--                            </div>-->
            <!--                            <div class="details-down">-->
            <!--                                <p-->
            <!--                                    class="last"-->
            <!--                                >-->
            <!--                                    Add animals!!-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="box-plus">-->
            <!--                        <div class="box-image">-->
            <!--                            <i class="fa fa-solid fa-horse"></i>-->
            <!--                        </div>-->
            <!--                        <div class="details">-->
            <!--                            <div class="details-top">-->
            <!--                                <h4 class="name">NO ANIMALS FOUNDED!</h4>-->
            <!--                            </div>-->
            <!--                            <div class="details-down">-->
            <!--                                <p-->
            <!--                                    class="last"-->
            <!--                                >-->
            <!--                                    Add animals!!-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="box-plus">-->
            <!--                        <div class="box-image">-->
            <!--                            <i class="fa fa-solid fa-bug"></i>-->
            <!--                        </div>-->
            <!--                        <div class="details">-->
            <!--                            <div class="details-top">-->
            <!--                                <h4 class="name">NO ANIMALS FOUNDED!</h4>-->
            <!--                            </div>-->
            <!--                            <div class="details-down">-->
            <!--                                <p-->
            <!--                                    class="last"-->
            <!--                                >-->
            <!--                                    Add animals!!-->
            <!--                                </p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->


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
            activeIndex: 0,
            searchInput: null,

            viewNewAnimal: false,

            animalsFounded: true,
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
            if (arg === null) {

            } else {
                // console.log(arg);
                arg = this.getTrimmed(arg);

                this.contactsGift.forEach((element) => {
                    element.visible = this.getTrimmed(element.name).includes(arg);
                });
            }

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
    }

    .search-chat-disabled {
        position: relative;

        width: 100%;
        height: 50px;

        background: #f6f6f6;
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

    }

    .chat-list {
        height: calc(100% - 110px);
        background: white;
        overflow-y: auto;

        .box, .box-plus {
            position: relative;
            width: 100%;

            display: flex;

            padding: 10px;
            cursor: pointer;

            height: 80px;
            transition: 0.1s;
        }

        .box {
            &:hover {
                background: black;
                //transform: scale(0.95);
                .name {
                    color: white;
                }
            }
        }

        .box-plus {
            &:hover {
                //transform: scale(0.95);
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
                    text-transform: uppercase;

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
