<template>
    <header class="header">
        <div class="content container">

            <div class="brand-wrapper">
                <img
                    :src="`http://images.repzio.com/productImages/${pageData.manufacturerId}/logo${pageData.manufacturerId}_lg.jpg?height=100`"
                    class="brandLogo"
                    :alt="pageData.companyName"
                />
                <p class="companyName">{{ pageData.companyName }}</p>
            </div>

            <div
                v-if="salesRep"
                class="rep-block"
            >
                <p class="line repName">{{ salesRep.firstName }} {{ salesRep.lastName }}</p>
                <a
                    :href="`mailto: ${salesRep.emailAddress}`"
                    class="line email"
                >{{ salesRep.emailAddress }}</a>
                <a
                    :href="`tel: ${repPhone}`"
                    class="line phone"
                >{{ repPhone }}</a>
                <p class="line location">{{ repAddress }}</p>
            </div>
        </div>

    </header>
</template>

<script>
import { mapState } from "vuex";
import formatPhone from "@/helpers/formatPhone";

export default {
    name: "MainHeader",

    computed: {
        ...mapState(["pageData"]),
        salesRep() {
            return this.pageData.salesRep;
        },
        repPhone() {
            return this.salesRep.cellPhone
                ? formatPhone(this.salesRep.cellPhone)
                : formatPhone(this.salesRep.phone);
        },
        repAddress() {
            return `${this.salesRep.city}, ${this.salesRep.state} ${this.salesRep.postalCode}`;
        },
    },

    methods: {
        formatPhone(str) {
            return formatPhone(str);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 16rem;
    padding: 1rem 0;
    border-bottom: 3px solid var(--primary-color);
    @include breakpoint(phone-sm) {
        height: 14rem;
    }
    .content {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }
    .brand-wrapper {
        .brandLogo {
            @include breakpoint(phone-sm) {
                height: 75px;
            }
        }
        .companyName {
            font-weight: 600;
            font-size: 1.9rem;
            color: var(--gray-text);
            @include breakpoint(phone-sm) {
                font-size: 1.6rem;
            }
        }
    }

    .rep-block {
        display: flex;
        flex-direction: column;
        text-align: right;
        .line {
            padding: 0.2rem 0;
            font-size: 1.4rem;

            &.repName {
                font-weight: 700;
                font-size: 1.5rem;
            }
            &.email,
            &.phone {
                color: var(--gray-text);
                text-decoration: underline;
                transition: color 0.3s;
                cursor: pointer;
                &:hover {
                    color: var(--primary-color);
                }
            }
            &.location {
                color: var(--gray-text);
            }
        }
    }
}
</style>