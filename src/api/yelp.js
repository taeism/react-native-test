import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer 8v2hXEbPsWfc9YTqU7OS2lEspgQeelZoy9OwMX1LGZZAO5nL5jwimPQpuRyttgQXFuyDU5KB9A5mPSv6f-mBB-Iup_PChPo5BICHBgS-HQ4QpIgOeXG-XIn_x2byXnYx'
    }
})