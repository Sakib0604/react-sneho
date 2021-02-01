import React, { Component } from 'react';

class Tabs extends Component {
    render() {
        return (
            <div class="tabset mx-auto pt-5">
                <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked />
                <label for="tab1">Additional Information</label>
                
                <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                <label for="tab2">Review</label>
                
                <div class="tab-panels">
                    <section id="marzen" class="tab-panel text-left">
                        <h2 className=''>Additional Information</h2>
                        <table>
                            <tr>
                                <td>Diaper Types</td>
                                <td className>Pant</td>
                            </tr>
                            <tr>
                                <td>Pack Size</td>
                                <td>XL 42(15-22 kg)</td>
                            </tr>
                            <tr>
                                <td>Quanttity</td>
                                <td>42 Pcs</td>
                            </tr>
                        </table>
                    </section>
                    <section id="rauchbier" class="tab-panel text-left">
                        <h2 className=''>Review</h2>
                        <p>There are no reviews yet.</p>
                        <p>Be the first to review</p>
                        <p>Your rating *</p>
                        <div>
                            <span><img src='https://www.flaticon.com/svg/static/icons/svg/1828/1828970.svg'  className='star'/></span>
                            <span><img src='https://www.flaticon.com/svg/static/icons/svg/1828/1828970.svg'  className='star'/></span>
                            <span><img src='https://www.flaticon.com/svg/static/icons/svg/1828/1828970.svg'  className='star'/></span>
                            <span><img src='https://www.flaticon.com/svg/static/icons/svg/1828/1828970.svg'  className='star'/></span>
                            <span><img src='https://www.flaticon.com/svg/static/icons/svg/1828/1828970.svg'  className='star'/></span>
                        </div>
                        <p>Your review *</p>
                        <textarea name="comment" id="" cols="100" rows="5"></textarea>
                        <form action="/action_page.php">
                            <label htmlFor="">Name *</label>
                            <input type="text"/> <br/>
                            <label htmlFor="">Email *</label>
                            <input type="text"/> <br/> <br/>
                            <input type="submit" value="Submit"/>
                        </form>
                        
                    </section>
                    
                </div>
            </div>

        );
    }
}

export default Tabs;