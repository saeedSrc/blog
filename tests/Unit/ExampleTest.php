<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);

        $test = [];
        array_push($test,'saeed');
        $this->assertSame(1, $this->count($test));
        $this->assertSame('saeed', $test[$this->count($test)- 1]);
    }
}
