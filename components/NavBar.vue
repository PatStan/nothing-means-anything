<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <ul v-show="!mobile" class="navigation">
                <li><NuxtLink class="link" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="link" to="/films">Films</NuxtLink></li>
                <li><NuxtLink class="link" to="/contact">Contact</NuxtLink></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars fill-current text-black" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><NuxtLink class="link" to="/films">Films</NuxtLink></li>
                    <li><NuxtLink class="link" to="/contact">Contact</NuxtLink></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        if (window) {
            window.addEventListener("resize", this.checkScreen);
        }
        this.checkScreen();
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen() {
            if (window) {
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 768) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    background-color: white;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: black;

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1140px;
        }
        @media(min-width: 769px)
        {
            padding: 2px 0;
        }
        @media(max-width: 768px)
        {
            padding: 20px 0;
        }

        ul,
        .link {
            font-weight: 500;
            color: darkslategray;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 3px;
            margin-left: 1px;
        }

        .link {
            font-size: 24px;
            font-weight: bold;
            transition: .5s ease all;
            text-align: right;
            padding-left: 60px;
            padding-bottom: 11px;
            padding-top: 5px;
            padding-right: 6px;
            height: 80%;
            border: 2px solid black;

            &:hover {
                color: slategray;
                background-color: darkslategrey;
                border-color: black;
            }
        }

        .branding {
            display: flex;
            align-items: center;

            img {
                background-color: black;
                width: 50px;
                transition: .5s ease all;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: .8s ease all;
                fill: currentColor;
                color: black;
            }
        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display:  flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: black;
            top: 0;
            left: 0;

            li {
                margin-left: 0;
                .link {
                    color: white;
                }
            }
        }
    }

    .scrolled-nav {
        background-color: blue;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        nav {
            padding: 8px 0;

            .branding {
                img {
                    width: 40px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
            }
        }
    }
}
</style>
