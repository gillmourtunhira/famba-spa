<script>
    import FloatBox from './FloatBox.svelte'
</script>
<style lang="scss">
    .wrapper{
        background-color: orange;
        width: 100%;
        height: 100vh;
        &__items{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            width: 30%;
            min-width: 300px;
            margin: 0 auto;
        }
    }
    .book__car{
        button{
            width: 100%;
            padding: 1em;
            border: none;
            outline: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: peachpuff;
            font-size: 1em;
        }
    }
</style>
<div class="wrapper">
    <div class="wrapper__items">
        <FloatBox/>
        <div class="book__car">
            <button>Book</button>
        </div>
    </div>
</div>