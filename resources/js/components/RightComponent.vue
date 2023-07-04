<template>
    <div class="container-right">
        <div class="header-right">
            <div class="user-image">
                <img class="cover" src="/assets/miles.jpg">
            </div>
            <div class="nav-icons">
                <i class="ml-2 fa-solid fa-search"></i>
                <i class="ml-2 fa-solid fa-gear"></i>
            </div>
        </div>
        <div class="chat-box">
            <div class="message justify-content-end">
                <div class="my-message">
                    <p class="txt-message-normal">Hi <br> <span class="my-time">19:23</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Wa sapspap ap sp a ddup <br> <span
                        class="friend-time">19:24</span></p>
                </div>
            </div>


            <div class="message justify-content-end">
                <div class="my-message">
                    <p class="txt-message-normal">Hi <br> <span class="my-time">19:23</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Waasdlmas kasd sak sdpa dpasd a da spdpad a spd as dap dap s
                        dpasp da psdp asdp asp da sd as apddup <br> <span class="friend-time">19:24</span></p>
                </div>
            </div>
            <div class="message justify-content-end">
                <div class="my-message">
                    <p class="txt-message-normal">Hddaa spa spapsap sp sp sap sap ap sp asp a aps as pa sp ap sp
                        ai <br> <span class="my-time">19:23</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Waddap spa sapsp aspup <br> <span
                        class="friend-time">19:24</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Wa sapspap ap sp a ddup <br> <span
                        class="friend-time">19:24</span></p>
                </div>
            </div>


            <div class="message justify-content-end">
                <div class="my-message">
                    <p class="txt-message-normal">Hi <br> <span class="my-time">19:23</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Waasdlmas kasd sak sdpa dpasd a da spdpad a spd as dap dap s
                        dpasp da psdp asdp asp da sd as apddup <br> <span class="friend-time">19:24</span></p>
                </div>
            </div>
            <div class="message justify-content-end">
                <div class="my-message">
                    <p class="txt-message-normal">Hddaa spa spapsap sp sp sap sap ap sp asp a aps as pa sp ap sp
                        ai <br> <span class="my-time">19:23</span></p>
                </div>
            </div>

            <div class="message justify-content-start">
                <div class="friend-message">
                    <p class="txt-message-normal">Waddap spa sapsp aspup <br> <span
                        class="friend-time">19:24</span></p>
                </div>
            </div>


        </div>
        <div class="footer-right">
            <div class="first">
                <i class="fa mr-3 fa-regular fa-face-smile"></i>
                <!--                <i class="fa fa-solid fa-paperclip"></i>-->
            </div>
            <div class="second">
                <input id="search" name="search" placeholder="Type a message" type="text">
            </div>
            <div class="third">
                <i class="fa-regular fa-paper-plane fa-bounce"></i>
                <!--                <i class="fa fa-solid fa-microphone-slash"></i>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log('Component right mounted.')
    }
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
    background: url("/assets/sp-bg.png");


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

        .nav-icons {
            font-size: 1rem;
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

            p {
                margin: 0;
                font-size: 0.8rem;
            }


        }


        .my-message {
            max-width: 65%;


            text-align: right;
            background: #fffbdb;

            padding: 8px 15px 0 15px;


            border-radius: 10px;

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
            }

        }

        .friend-message {
            max-width: 65%;

            text-align: left;

            background: rgb(255, 229, 229);

            padding: 8px 15px 0 15px;
            border-radius: 10px;

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
            }
        }
    }
}
</style>
