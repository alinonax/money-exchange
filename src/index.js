module.exports = function makeExchange(currency) {
    let h = 50, q = 25, d = 10, n = 5, p = 1;
    let result = {};

    if (currency <= 0) {
    	return result;
    };

    if (currency >= 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

    // h
    let num_h_coins = Math.floor(currency / h);
    if (num_h_coins > 0) {
    	result['H'] = num_h_coins;
    };

    // q
    let num_q_coins = Math.floor((currency - num_h_coins * h) / q);
    if (num_q_coins > 0) {
    	result['Q'] = num_q_coins;
    };

    // d
    let num_d_coins = Math.floor((currency - num_h_coins * h - num_q_coins * q) / d);
    if (num_d_coins > 0) {
    	result['D'] = num_d_coins;
    };

    // n
    let num_n_coins = Math.floor((currency - num_h_coins * h - num_q_coins * q - num_d_coins * d) / n);
    if (num_n_coins > 0) {
    	result['N'] = num_n_coins;
    };
    
    // p
    let num_p_coins = Math.floor(currency - num_h_coins * h - num_q_coins * q - num_d_coins * d - num_n_coins * n);
    if (num_p_coins > 0) {
    	result['P'] = num_p_coins;
    };

    return result;
}
